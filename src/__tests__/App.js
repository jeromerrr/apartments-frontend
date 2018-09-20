import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Enzyme allows to test simulated events able to run with latest React
Enzyme.configure({ adapter: new Adapter() });

// TEST WRITTEN IN JEST
// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });


test('renders without crashing', () => {
  const app = mount(<App />)
});

// Story: As a un-registered guest, I can go to registration page with a form and register as a new user. Once I have registered, I should be redirected to the index view of all apartments
//
// Story: As a logged in user, I can go to a new apartment page with a form and create a new apartment
//
// Story: As a logged in user, I can edit the information for any apartment I have created, but I cannot edit the information for apartments that belong to someone else
//
// Story: As a logged in user, I should be able to log out
//
// Story: As a registered user who has not logged in, I can go to a login page
