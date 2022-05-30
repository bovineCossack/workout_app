import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/UI/Button/Button';
import InputBox from '../components/UI/InputBox/InputBox';
import Content from '../components/UI/Content/Content';
import Header from '../components/Header/Header';
import { PopUp } from '../components/UI/PopUp/PopUp.styles';

const Add = () => {
  const [error, setError] = useState(false);
  const [exData, setExData] = useState({
    name: '',
    category1: '',
    category2: '',
  });
  const navigation = useNavigate();

  return (
    <Content>
      <Header />

      {error && <PopUp handleClose={() => setError(false)}>{error}</PopUp>}
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          const res = await fetch(
            `${process.env.REACT_APP_SERVER_URL}/exercises`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(exData),
            }
          );
          const data = await res.json();

          if (data) {
            localStorage.setItem('token', data.token);
            return navigation('/');
          }

          setError(data.err || 'Unexpected error');
        }}
      >
        <InputBox
          label="Name"
          type="text"
          name="name"
          placeholder="Exercise name"
          handleChange={(name) => setExData({ ...exData, name })}
        />
        <InputBox
          label="Primary"
          type="text"
          name="category1"
          placeholder="Primary muscle group"
          handleChange={(category1) => setExData({ ...exData, category1 })}
        />
        <InputBox
          label="Secondary"
          type="text"
          name="category2"
          placeholder="Secondary muscle group"
          handleChange={(category2) => setExData({ ...exData, category2 })}
        />
        <Button type="submit">Add Exercise</Button>
      </form>
    </Content>
  );
};

export default Add;
