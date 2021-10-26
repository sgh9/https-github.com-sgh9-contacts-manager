import React, { useEffect, useState } from 'react';
import './style.css';
import Contacts from './Contacts';
import Search from './Search';
import Recent from './Recent';
import Favorities from './Favorities';

export default function App() {
  const [tab, setTab] = useState(1);
  const [SearchKey, setSearchKey] = useState('');

  const onSearchKey = (key) => {
    setSearchKey(key);
  };

  return (
    <div className="col-lg-6 col-sm-6 mx-auto p-2">
      <div
        className="btn-pref btn-group btn-group-justified btn-group-lg"
        role="group"
        aria-label="..."
      >
        <div className="btn-group" role="group">
          <button
            type="button"
            id="stars"
            className={`${tab === 1 && 'btn-primary'} btn`}
            href="#tab1"
            onClick={() => setTab(1)}
            data-toggle="tab"
          >
            <span
              className="glyphicon glyphicon-star"
              aria-hidden="true"
            ></span>
            <div className="hidden-xs">Recent</div>
          </button>
        </div>
        <div className="btn-group" role="group">
          <button
            className={`${tab === 2 && 'btn-primary'} btn`}
            onClick={() => setTab(2)}
            type="button"
            id="favorites"
            href="#tab2"
            data-toggle="tab"
          >
            <span
              className="glyphicon glyphicon-heart"
              aria-hidden="true"
            ></span>
            <div className="hidden-xs">Contacts</div>
          </button>
        </div>
        <div className="btn-group" role="group">
          <button
            className={`${tab === 3 && 'btn-primary'} btn`}
            onClick={() => setTab(3)}
            type="button"
            id="following"
            href="#tab3"
            data-toggle="tab"
          >
            <span
              className="glyphicon glyphicon-user"
              aria-hidden="true"
            ></span>
            <div className="hidden-xs">Favorites</div>
          </button>
        </div>
      </div>

      <div className="px-2 py-3">
        <Search onSearchKey={onSearchKey} />
      </div>

      <div className="well">
        <div className="tab-content">
          <div className={`${tab === 1 && 'active'} tab-pane`} id="tab1">
            <Recent searchKey={SearchKey} />
          </div>
          <div className={`${tab === 2 && 'active'} tab-pane`} id="tab2">
            <Contacts searchKey={SearchKey} />
          </div>
          <div className={`${tab === 3 && 'active'} tab-pane`} id="tab3">
            <Favorities />
          </div>
        </div>
      </div>
    </div>
  );
}
