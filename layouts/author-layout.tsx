import type { Author } from 'contentlayer/generated'
import type { ReactNode } from 'react'
import { CareerTimeline } from '~/components/author/career'
import { SocialAccounts } from '~/components/author/social-accounts'
import { ProfileCard } from '~/components/cards/profile'
import { Button } from '~/components/ui/button'
import { Container } from '~/components/ui/container'
import { Image } from '~/components/ui/image'
import { PageHeader } from '~/components/ui/page-header'
import { Twemoji } from '~/components/ui/twemoji'
import { SITE_METADATA } from '~/data/site-metadata'

interface Props {
	children?: ReactNode
	content: Omit<Author, '_id' | '_raw' | 'body'>
}

export function AuthorLayout({ children }: Props) {
	return (
		<Container className="pt-4 lg:pt-12">
			<PageHeader
				title="About"
				description="A bit of background on who I am, what I do, and why I started this blog. Nothing too serious, just a little intro to the person typing away behind the scenes."
				className="border-b border-gray-200 dark:border-gray-700"
			/>
			<div className="py-8 md:grid md:grid-cols-3">
				<div className="pr-4">
					<ProfileCard />
				</div>
				<div className="md:col-span-2 md:pl-12 xl:pl-16">
					<div className="prose prose-lg dark:prose-invert">
						<div></div>
					</div>
				</div>
			</div>
		</Container>
	)
}
