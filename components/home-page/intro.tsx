import { Twemoji } from '~/components/ui/twemoji'
import { SITE_METADATA } from '~/data/site-metadata'

export function Intro() {
  const { profile } = SITE_METADATA

  return (
    <h1 className="text-neutral-900 dark:text-neutral-200">
      I'm <span className="font-medium">{profile.name}</span> - a passionate{' '}
      {profile.occupation.title} in
      <span className="hidden font-medium">{profile.location.country}</span>
      <span className="absolute ml-1.5 inline-flex pt-[3px]">
        <Twemoji emoji={profile.location.emoji} />
      </span>
    </h1>
  )
}
