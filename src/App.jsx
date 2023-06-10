import Avatar from './components/Avatar'

export default function App() {

  const greet = 'Hello world';
  const footerMessage = 'Copyright 2023 by kim';

  return (
    <>
      <h1>{greet}</h1>
      <hr />
      <Avatar/>
      <h3>{footerMessage}</h3>
    </>
  )
}
