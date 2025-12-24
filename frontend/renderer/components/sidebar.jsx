import { useState } from 'react';

import { BsSearch } from 'react-icons/bs'
import { AiFillFolderOpen } from 'react-icons/ai'

const Sidebar = () => {
  const [search, setSearch] = useState("");
  
  const updateSearch = (event) => {
    setSearch(event.target.value);
    console.log(event.target.value);
  }

  const psuedoData = [
    {
      name: 'Quantum Mechanics',
      line: 'Yo, this class is difficult',
      time: 'Today'
    },
    {
      name: 'Distributed Systems',
      line: "I'm going to get cooked by this course",
      time: 'Yesterday',
    }
  ]

  return (
    <aside className="border w-1/4 h-screen bg-sidebar border-border flex flex-col p-4">
      {/* Logo */}
      <div>
        <h1 className="flex flex-row text-muted"> <AiFillFolderOpen className="my-1 mx-2 text-accent"></AiFillFolderOpen> Nota </h1>
      </div>

      {/* Searchbar */}
      <div className="relative">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted">
            <BsSearch></BsSearch>
          </span>
          <input className="border-2 w-full p-1 pl-10 rounded-lg text-muted bg-editor border-border" type="text" name="searchbar" placeholder="Search for your notes" 
            onChange={updateSearch} value={search}/>
      </div>

      {/* List */}
      <div className="my-8">
        <button className="rounded-lg w-full bg-accent border-border p-2 px-6"> + New Note </button>
        <div className="my-4">
          {psuedoData.map(item => (
            <div className="my-4" key={item.id}
            style={{
            border: "1px solid #ccc",
            borderRadius: "12px",
            padding: "16px",
            background: "#f9f9f9"
          }}>
              <h3>{item.name}</h3>
              <h3>{item.line}</h3>
              <h3>{item.time}</h3>
            </div>
          ))}
        </div>
      </div>

      <footer className="absolute bottom-0 py-2 w-full">
        <label className="text-muted"> {psuedoData.length} Notes </label>
      </footer>
    </aside>
  )
}

export default Sidebar;
