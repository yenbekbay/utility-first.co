import {defineDocumentType, makeSource} from 'contentlayer/source-files'
import {fromJs} from 'esast-util-from-js'
import {stringify} from 'javascript-stringify'
import queryString from 'node:querystring'
import {getPlaiceholder} from 'plaiceholder'
import {visit} from 'unist-util-visit'

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: '**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    year: {
      type: 'string',
      required: true,
    },
    role: {
      type: 'list',
      of: {type: 'string'},
      required: true,
    },
    website: {
      type: 'string',
    },
    coverImageSrc: {
      type: 'string',
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (project) => project._raw.flattenedPath,
    },
  },
}))

export default makeSource({
  contentDirPath: 'projects',
  documentTypes: [Project],
  mdx: {
    remarkPlugins: [
      () => async (tree) => {
        /** @type {Promise<void>[]} */
        const promises = []
        visit(
          tree,
          {type: 'paragraph'},
          /**
           * @param {import('mdast').Paragraph} paragraphNode
           * @param {number | null} index
           * @param {import('unist').Parent | null} parentNode
           */
          (paragraphNode, index, parentNode) => {
            if (index == null || !parentNode) {
              return
            }
            const imageNode =
              paragraphNode.children.length === 1 &&
              paragraphNode.children[0].type === 'image'
                ? paragraphNode.children[0]
                : null
            if (!imageNode) {
              return
            }
            /** @type {Promise<void>} */
            const promise = new Promise(async (resolve) => {
              const {img: src, svg} = await getPlaiceholder(imageNode.url, {
                size: 8,
              })
              const srcCode = `(${stringify(src)})`
              const svgCode = `(${stringify(svg)})`
              const params = Object.entries(
                queryString.parse(imageNode.title ?? ''),
              )
              const attributes = {
                alt: imageNode.alt,
                title: imageNode.alt,
              }
              if (params.length === 1 && params[0][0] === imageNode.title) {
                attributes.title = params[0][0]
              } else {
                for (const [key, value] of params) {
                  attributes[key] = Array.isArray(value)
                    ? value.join(' ')
                    : value
                }
              }
              /** @type {import('mdast-util-mdx-jsx').MdxJsxFlowElement} */
              const newNode = {
                type: 'mdxJsxFlowElement',
                name: 'EnhancedImage',
                attributes: [
                  /** @type {import('mdast-util-mdx-jsx').MdxJsxAttribute} */
                  ({
                    type: 'mdxJsxAttribute',
                    name: 'src',
                    value: {
                      type: 'mdxJsxAttributeValueExpression',
                      value: srcCode,
                      data: {
                        estree: fromJs(srcCode),
                      },
                    },
                  }),
                  /** @type {import('mdast-util-mdx-jsx').MdxJsxAttribute} */ ({
                    type: 'mdxJsxAttribute',
                    name: 'svg',
                    value: {
                      type: 'mdxJsxAttributeValueExpression',
                      value: svgCode,
                      data: {
                        estree: fromJs(svgCode),
                      },
                    },
                  }),
                  ...Object.entries(attributes).map(
                    ([name, value]) =>
                      /** @type {import('mdast-util-mdx-jsx').MdxJsxAttribute} */ ({
                        type: 'mdxJsxAttribute',
                        name,
                        value,
                      }),
                  ),
                ],
                children: [],
                data: {
                  _mdxExplicitJsx: true,
                },
              }
              parentNode.children.splice(index, 1, newNode)
              resolve()
            })
            promises.push(promise)
          },
        )
        await Promise.all(promises)
      },
    ],
  },
})
