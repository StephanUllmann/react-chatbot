function App() {
  return (
    <div className='max-w-2xl mx-auto space-y-5'>
      <h1 className='text-center my-2 font-semibold'>React Chatbot 🤖</h1>
      <form className='grid gap-3'>
        <div className='form-control justify-self-start'>
          <label className='cursor-pointer label'>
            <span className='label-text mr-3'>Streaming</span>
            <input type='checkbox' className='checkbox checkbox-accent' />
          </label>
        </div>
        <textarea
          placeholder='Your Message'
          className='textarea textarea-bordered min-h-[5lh] textarea-md w-full'
        ></textarea>
        <button className='btn btn-primary shadow-md'>Submit✨</button>
      </form>
      <div className='artboard artboard-horizontal px-2 py-1 phone-2 shadow-md rounded outline outline-1 overflow-y-scroll'></div>
    </div>
  );
}

export default App;
