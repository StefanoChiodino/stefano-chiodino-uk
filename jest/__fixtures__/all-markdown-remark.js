'use strict';

module.exports = {
  allMarkdownRemark: {
    group: [
      {
        fieldValue: 'test_0',
        totalCount: 1
      },
      {
        fieldValue: 'test_1',
        totalCount: 2
      }
    ],
    edges: [
      {
        node: {
          fields: {
            slug: '/test_0',
            categorySlug: '/test'
          },
          frontmatter: {
            date: '2016-09-01',
            category: 'test',
            title: 'test_0'
          }
        }
      },
      {
        node: {
          fields: {
            slug: '/test_1',
            categorySlug: '/test'
          },
          frontmatter: {
            date: '2016-09-01',
            category: 'test',
            title: 'test_1'
          }
        }
      }
    ]
  }
};