import Tag from '@/components/Tag'
import { genPageMetadata } from 'app/seo'
import tagData from 'app/tag-data.json'
import Container from '~/components/Container'

export let metadata = genPageMetadata({ title: 'Tags', description: 'Things I blog about' })

export default async function Page() {
  let tagCounts = tagData as Record<string, number>
  let tagKeys = Object.keys(tagCounts)
  let sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])
  return (
    <Container className="pt-4 md:pt-0">
      <div className="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
        <div className="space-x-2 pt-6">
          <h1 className="text-3xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl md:leading-14">
            Tags
          </h1>
        </div>
        <div className="my-8 flex max-w-lg flex-wrap py-8 md:my-0 md:py-8">
          {tagKeys.length === 0 && 'No tags found.'}
          {sortedTags.map((t) => {
            return (
              <div key={t} className="mb-2 mr-5 mt-2 flex items-center gap-0.5">
                <Tag text={t} />
                <span className="text-sm text-gray-600 dark:text-gray-300">({tagCounts[t]})</span>
              </div>
            )
          })}
        </div>
      </div>
    </Container>
  )
}
