import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/UI/Button/Button';
import InputBox from '../components/UI/InputBox/InputBox';
import { sendAddFetch } from '../helpers/helper';
import ContentWrapper from '../components/ContentWrapper/ContentWrapper';
import Form from '../components/UI/Form/Form';

const Add = () => {
  const [exData, setExData] = useState({
    name: '',
    category1: '',
    category2: '',
  });
  const navigation = useNavigate();

  return (
    <ContentWrapper>
      <h1>Add a new exercise</h1>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          const resp = sendAddFetch('exercises', exData);
          if (resp.success === true) {
            navigation('/', { replace: true });
          }
          if (resp.success === false) {
            return false;
          }
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
      </Form>
    </ContentWrapper>
  );
};

export default Add;
