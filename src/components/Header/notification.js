/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import bell from 'assets/images/bellon.svg';

import { getAllNotifications, clearAllNotification } from 'store/actions/notification';
import NotificationArea from 'containers/Notification/NotificationArea';

import './style.scss';
import { getGlobalColor } from 'containers/App/DynamicBrandingApply';
import NotificationSvg from 'iconLibrary/header/NotificationSvg';

function HeaderNotification() {
  const dispatch = useDispatch();
  const allNotifications = useSelector((state) => state.notification);
  const auth = useSelector((state) => state.auth);

  const [notificationData, setNotificationData] = useState([]);
  const [errorNotification, setErrorNotification] = useState('');
  const organization = useSelector((state) => state.organization);
  useEffect(() => {
    if (auth?.user) {
      dispatch(getAllNotifications());
    }
  }, [auth?.user, dispatch]);

  useEffect(() => {
    if (notificationData.yesterday) {
      if (notificationData.today.length === 0 && notificationData.yesterday.length === 0 && notificationData.older.length === 0) {
        setErrorNotification('Currently no Notifications are available.');
      }
    }
  }, [notificationData]);

  useEffect(() => {
    setNotificationData(allNotifications.notification);
  }, [allNotifications]);
  const primaryColor = getGlobalColor('--main-primary-color');
  return (
    <li className="notification-bar">
      <Dropdown>
        <Dropdown.Toggle className="d-flex align-items-center" id="dropdown-autoclose-outside">
          <div className="notification-alert" onClick={() => dispatch(clearAllNotification())}>
            <NotificationSvg primaryColor={primaryColor} />

            <p className="header-icon-text">Notifications</p>
            {allNotifications.notificationAlert > 0 && <div className="alert-added" />}
          </div>
        </Dropdown.Toggle>

        <Dropdown.Menu className="user-dropdown">
          <div className="scroll-notification">
            <div className="header-data">
              <h2>Notifications</h2>
            </div>
            {notificationData.today && Object.keys(notificationData.today).length > 0 && (
              <>
                <div className="notification-status"> Today </div>
                {notificationData.today.map((msg) => (
                  <a key={msg.id}>
                    <NotificationArea content={msg} />
                  </a>
                ))}
              </>
            )}

            {notificationData.yesterday && Object.keys(notificationData.yesterday).length > 0 && (
              <>
                <div className="notification-status"> Yesterday </div>
                {notificationData.yesterday.map((msg) => (
                  <a key={msg.id}>
                    <NotificationArea content={msg} />
                  </a>
                ))}
              </>
            )}

            {notificationData.older && Object.keys(notificationData.older).length > 0 && (
              <>
                <div className="notification-status"> Older </div>
                {notificationData.older.map((msg) => (
                  <a key={msg.id}>
                    <NotificationArea content={msg} />
                  </a>
                ))}
              </>
            )}
            {errorNotification && <div className="error-notification">{errorNotification}</div>}
          </div>
          <div className="btn-all-notification">
            <Dropdown.Item className="all-notification" as={Link} to={`/org/${organization.currentOrganization?.domain}/notification`}>
              See all notifications
            </Dropdown.Item>
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </li>
  );
}

export default HeaderNotification;
