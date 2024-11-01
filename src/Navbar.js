import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ newProjectName, setNewProjectName, handleProjectAdded, toggleProjectControls, showProjectControls, handleSearch }) => 
{
    const [searchTerm, setSearchTerm] = useState('');
    const onSearch = () => 
    {
        handleSearch(searchTerm);
    };
    return (
        <nav className="navbar">
            <h1 style={{marginRight:'1560px', color:'white'}}>Project Management</h1>
            <button  onClick={toggleProjectControls} style={{marginRight:'1650px', color:'white'}}>
                {showProjectControls ? 'Hide Project Controls' : 'Show Project Controls'}
            </button>
        </nav>
    );
};

export default Navbar;
