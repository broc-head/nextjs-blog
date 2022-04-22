import Head from 'next/head';
import { ReactNode, FunctionComponent } from 'react'

type Props = {
  children?: ReactNode
}

const Container: FunctionComponent = ({ children }: Props) => {
  return <div className="mx-auto px-4 md:px-16">{children}</div>
}

export default Container
