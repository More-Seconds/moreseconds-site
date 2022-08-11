type Props = {
  activeIndex: number
}

export function Dots(props: Props) {
  const idleClass = 'w-3 h-3 rounded-full bg-darkermid '
  const activeClass = 'w-3 h-3 rounded-full bg-accent'
  return (
    <ul className="flex gap-2 self-start sm:mx-auto relative sm:-top-[4.25em] sm:translate-x-7 lg:translate-x-[0px]">
      <li className={props.activeIndex == 0 ? activeClass : idleClass}></li>
      <li className={props.activeIndex == 1 ? activeClass : idleClass}></li>
      <li className={props.activeIndex == 2 ? activeClass : idleClass}></li>
      <li className={props.activeIndex == 3 ? activeClass : idleClass}></li>
      <li className={props.activeIndex == 4 ? activeClass : idleClass}></li>
      <li className={props.activeIndex == 5 ? activeClass : idleClass}></li>
    </ul>
  )
}
