import type { Blog, Snippet } from '~/.contentlayer/generated'
import { ProfileCard } from '~/components/cards/profile'
import { Container } from '~/components/ui/container'
import { Twemoji } from '~/components/ui/twemoji'
import { SITE_METADATA } from '~/data/site-metadata'
import type { CoreContent } from '~/types/data'
import { Greeting } from './greeting'
import { Intro } from './intro'
import { LatestPosts } from './latest-posts'
import { BlogLinks } from './links'
import { TypedBios } from './typed-bios'
import BuyMeACoffee from '../ui/BuyMeACoffee'

export function Home({
	posts,
	snippets,
}: {
	posts: CoreContent<Blog>[]
	snippets: CoreContent<Snippet>[]
}) {
	const { profile } = SITE_METADATA

	return (
		<Container as="div" className="pt-4 lg:pt-12">
			<div className="py-6 md:pb-8 xl:grid xl:grid-cols-3">
				<div className="space-y-4 md:space-y-6 md:pr-8 xl:col-span-2">
					<Greeting />
					<div className="text-base leading-7 text-gray-600 dark:text-gray-400 md:text-lg md:leading-8">
						<Intro />
						<TypedBios />
						<div className="mb-6 mt-4 md:mb-8">
							{profile.bio.map((paragraph, idx) => (
								<p key={idx}>{paragraph}</p>
							))}
						</div>
						<BlogLinks />
						<div className="my-6 flex items-center gap-4 md:my-8">
							<span className="mr-2">Happy reading</span>
							<Twemoji emoji="clinking-beer-mugs" />
							<BuyMeACoffee className="ml-auto" />
						</div>
					</div>
				</div>
				<div className="hidden pl-4 pt-8 xl:block">
					<ProfileCard />
				</div>
			</div>
			<LatestPosts posts={posts} snippets={snippets} />
			{/* {SITE_METADATA.newsletter?.provider && (
        <div className="flex items-center justify-center py-4 lg:py-10">
          <NewsletterForm />
        </div>
      )} */}
		</Container>
	)
}
