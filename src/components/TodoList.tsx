export default function TodoList() {
    return (
      <div className="font-sans px-5">
        <h3 className="text-3xl">What to learn</h3>
        <div>
          <input className='border-solid border-2 border-sky-500 rounded' type="text" />
          <button className='border-solid border-2 border-sky-500 rounded pl-2 pr-2'> + </button>
        </div>
        <ul className='text-black'>
          <li><input type="checkbox" checked={true}/><span> HTML</span></li>
          <li><input type="checkbox" checked={true}/><span> CSS</span></li>
          <li><input type="checkbox" checked={true}/><span> SASS</span></li>
          <li><input type="checkbox" checked={false}/><span> React</span></li>
        </ul>
        <div className="space-x-2">
        <button className="border-solid border-2 border-sky-500 rounded px-2">All </button>
        <button className="border-solid border-2 border-sky-500 rounded px-2">Active </button>
        <button className="border-solid border-2 border-sky-500 rounded px-2">Completed </button>
        </div>
      </div>
    );
  }