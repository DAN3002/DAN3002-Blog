import React from 'react'
import BuyMeACoffee from '../ui/BuyMeACoffee'

const PostFooter: React.FC = () => {
	return (
		<div className="mt-8 border-t border-gray-200 pt-8 dark:border-gray-700">
			<div className="flex flex-col items-center justify-center space-y-4">
				<p className="text-center text-gray-600 dark:text-gray-400">
					If you found this article helpful, consider buying me a coffee to support my
					work!
				</p>
				<BuyMeACoffee />
			</div>
		</div>
	)
}

export default PostFooter
