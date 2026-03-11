import type { StructureResolver } from 'sanity/structure'
import { HomeIcon, DocumentTextIcon, ImageIcon } from '@sanity/icons'

const SINGLETONS = ['homePage']

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // Singleton: Home Page
      S.listItem()
        .title('Home Page')
        .icon(HomeIcon)
        .child(
          S.document()
            .schemaType('homePage')
            .documentId('homePage')
            .title('Home Page')
        ),

      S.divider(),

      // Regular document lists (excluding singletons)
      S.documentTypeListItem('post').title('Posts').icon(DocumentTextIcon),
      S.documentTypeListItem('artwork').title('Artwork').icon(ImageIcon),

      // Catch-all for any other types not explicitly listed
      ...S.documentTypeListItems().filter(
        (listItem) => !SINGLETONS.includes(listItem.getId() as string) &&
          !['post', 'artwork'].includes(listItem.getId() as string)
      ),
    ])
