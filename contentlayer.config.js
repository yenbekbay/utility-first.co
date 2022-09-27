import {defineDocumentType, makeSource} from 'contentlayer/source-files'

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: '**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the project',
      required: true,
    },
    year: {
      type: 'string',
      description: 'The year of the project',
      required: true,
    },
    coverImageSrc: {
      type: 'string',
      description: 'The path to the cover image of the project',
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
})
