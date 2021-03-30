let time, files

function App() {
  return fileInput();
}

const fileInput = () => {

  return <div id = 'formDiv'>
    <form id="fileSubmit">
      <input type="file" name="fileList" id="files" webkitdirectory='multiple' />
      
      <select id = 'timeForm'>
        <option value = "15"> 15 seconds </option>
        <option value = "30"> 30 seconds </option>

        <option value = "01"> 1 minute </option>
        <option value = "02"> 2 minutes </option>
        <option value = "03"> 3 minutes </option>
        <option value = "05"> 5 minutes </option>
        <option value = "07"> 7 minutes </option>
        <option value = "10"> 10 minutes </option>
        <option value = "15"> 15 minutes </option>


      </select>
      
      <button type="button" onClick={processFile}>Test Submit</button>
    </form>
  </div>

}

const processFile = () => {
  files = document.getElementById("files").files;
  time = document.getElementById("timeForm");
  document.getElementById("root").innerHTML = "";
  console.log(files);
  console.log(time.value);
  
  document.getElementById("root").innerHTML = Slideshow;

}

const Slideshow = () => {
  return (
    <div>
      <div>
        <button/> back
        <button/> pause
        <button/> forward
        <button/> stop
      </div>
    </div>
  );
}

export default App;
