type Props = {
  children: JSX.Element[]
  className?: string
}

export function Card(props : Props) {
  const styles = `flex flex-col items-center text-center justify-center px-5 pt-20 pb-20 mx-2 mt-2 mb-2 rounded-xl w-72 h-96 ${props.className}`;
  return (
    <div style={{backgroundColor: '#1D1D20', color: 'white'}} className = {styles}>
      {props.children}
    </div>
  )
}
