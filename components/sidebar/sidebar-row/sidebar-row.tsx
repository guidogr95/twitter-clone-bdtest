import { SVGProps } from "react"

type Props = {
	Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
	title: string,
	onClick?: () => void
}

export function SidebarRow({ Icon, title, onClick }: Props) {
	return (
		<div 
			onClick={() => onClick?.()}
			className="flex max-w-fit cursor-pointer items-center space-x-2 rounded-full px-4 py-3 transition-all duration-200 hover:bg-gray-100 group">
			<Icon className="h-6 w-6"/>
			<p
				className="group-hover:text-twitter hidden md:inline-flex text-base font-light lg:text-xl">
				{title}
			</p>
		</div>
	)
}