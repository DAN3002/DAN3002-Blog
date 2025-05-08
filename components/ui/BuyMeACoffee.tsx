import React from 'react'
import { FaCoffee } from 'react-icons/fa'
import { SITE_METADATA } from '~/data/site-metadata'

interface BuyMeACoffeeProps {
	className?: string
}

const BuyMeACoffee: React.FC<BuyMeACoffeeProps> = ({ className = '' }) => {
	return (
		<a
			href={SITE_METADATA.support.buyMeACoffee}
			target="_blank"
			rel="noopener noreferrer"
			className={`inline-flex items-center gap-2 rounded-lg bg-[#FFDD00] px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#FFDD00]/90 ${className}`}
		>
			<FaCoffee className="h-4 w-4 text-[#000000]" />
			<span className="text-[#000000]">Buy me a coffee</span>
		</a>
	)
}

export default BuyMeACoffee
