import S from '@sanity/desk-tool/structure-builder'
import MdSettings from 'react-icons/lib/md/settings'
import MdHome from 'react-icons/lib/md/home'
import MdLibraryBooks from 'react-icons/lib/md/library-books'
import MdInfo from 'react-icons/lib/md/info'
import MdWork from 'react-icons/lib/md/work'
import MdGroupWork from 'react-icons/lib/md/group-work'

const hiddenDocTypes = listItem =>
  !['privacy', 'projectPage', 'journalPage', 'author', 'post', 'siteSettings', 'homePage', 'projects', 'services', 'about', 'footer', 'category'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.listItem()
        .title('Footer')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('footer')
            .schemaType('footer')
            .documentId('footer')
            .title('Footer')
        ),
      S.listItem()
        .title('Home Page')
        .icon(MdHome)
        .child(
          S.editor()
            .id('homePage')
            .schemaType('homePage')
            .documentId('homePage')
            .title('Home Page')
        ),
      S.listItem()
        .title('Projects')
        .icon(MdWork)
        .schemaType('projects')
        .child(S.documentTypeList('projects').title('Projects')),
      S.listItem()
        .title('Project Settings')
        .icon(MdWork)
        .child(
          S.editor()
            .id('projectPage')
            .schemaType('projectPage')
            .documentId('projectPage')
        ),
      S.listItem()
        .title('Services')
        .icon(MdGroupWork)
        .child(
          S.editor()
            .id('services')
            .schemaType('services')
            .documentId('services')
            .title('Services')
        ),
      S.listItem()
        .title('About')
        .icon(MdInfo)
        .child(
          S.editor()
            .id('about')
            .schemaType('about')
            .documentId('about')
            .title('About')
        ),
      S.listItem()
        .title('Journal')
        .icon(MdLibraryBooks)
        .schemaType('post')
        .child(S.documentTypeList('post').title('Blog posts')),
      S.listItem()
        .title('Journal Settings')
        .icon(MdLibraryBooks)
        .child(
          S.editor()
            .id('journalPage')
            .schemaType('journalPage')
            .documentId('journalPage')
        ),
      S.listItem()
        .title('Categories')
        .icon(MdSettings)
        .schemaType('category')
        .child(S.documentTypeList('category').title('Categories')),
      S.listItem()
        .title('Privacy')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('privacy')
            .schemaType('privacy')
            .documentId('privacy')
        ),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
