import React from 'react'

function Chats() {
  return (
    <div className='chats'>
      <button className="btn">
        <i className="fa fa-plus"></i>
        <span>New conversation</span>
      </button>
      <div className="heading">
        <h2>Contacts</h2>
        <button className="btn2">
          <i className="fa fa-ellipsis-h"></i>
        </button>
      </div>
      <div className="search1">
        <div className="search2">
          <input type="text" placeholder="Search Here" required />
          <button className="search-btn">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>
      <div className='contact'>
      </div>
    </div>
  )
}

export default Chats
