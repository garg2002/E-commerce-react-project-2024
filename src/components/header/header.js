import React from 'react'
import './header.css'
import SearchIcon from '@mui/icons-material/Search'
import Select from '../selectDropDown/select'

const Header = () => {
  return (
    <>
      <header>
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-2">
                    <img src="" alt="logo" />
                </div>

                {/* headerSearch start */}
                <div className="col-sm-5">
                    <div className="headerSearch d-flex align-items-center">
                        <div className="selectDrop cursor position-relative">
                            All Categories
                            <Select />
                        </div>
                        <div className="search">
                            <input type="text" placeholder='Search for items...'/>
                            <SearchIcon className='searchIcon cursor'/>
                        </div>
                    </div>
                </div>
                {/* headerSearch  End  */}
            </div>
        </div>
      </header>
    </>
  )
}

export default Header
