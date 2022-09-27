import {defineDocumentType, makeSource} from 'contentlayer/source-files'

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: '**/*.md',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the project',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the project',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (project) => `/work/${project._raw.flattenedPath}`,
    },
  },
}))

export default makeSource({
  contentDirPath: 'projects',
  documentTypes: [Project],
})
