type Props = {
  childrenHeading: string
  childrenText: string
}

export function Card(props: Props) {
  return (
    <div style={{backgroundColor: '#1D1D20', color: 'white'}} className="px-2 pt-10 pb-10 mx-2 mt-2 mb-2 rounded max-h-96 w-72 h-96">
      <h2 className="box-content px-4 text-2xl font-semibold text-center">{props.childrenHeading}</h2>
      <p className="px-3 pt-8 pb-8 text-xl text-center">{props.childrenText}</p>
    </div>
  )
}
