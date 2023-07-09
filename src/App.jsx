import './App.css';
import BasicButton from "./components/BasicButton";
import UseRefHookDemo from './components/UseRefHookDemo';

export default function App() {

  const buttonClicked = () => {
    alert("hi");
  };

  return (
    <>
      <BasicButton onClick={buttonClicked}>클릭해주세요</BasicButton>

      <hr/>

      <div className="Toolbar" onClick={() => alert('you clicked on the toolbar')}>
        <BasicButton onClick={() => alert('Playing!')}>Play Movie</BasicButton>
        <BasicButton onClick={() => alert('Uploading!')}>Upload Image</BasicButton>
      </div>

      <hr/>

      <UseRefHookDemo/>
    </>
  );
}
