import React, { ChangeEvent, Fragment } from 'react';
import TextField from '@mui/material/TextField';
import { IBasicDetailsItem } from '@/stores/basic.interface';

const Contacts = ({
  basicTabs,
  onChangeHandler,
}: {
  basicTabs: IBasicDetailsItem;
  onChangeHandler: (value: unknown, key: string) => void;
}) => {
  return (
    <Fragment>
      <TextField
        label="Name"
        variant="filled"
        value={basicTabs.name}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          onChangeHandler(event.target.value, 'name');
        }}
        InputLabelProps={{ style: { color: 'black' } }}
        InputProps={{ style: { color: 'black' } }}
      />
      <TextField
        label="Image URL"
        variant="filled"
        value={basicTabs.image}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          onChangeHandler(event.target.value, 'image');
        }}
        InputLabelProps={{ style: { color: 'black' } }}
        InputProps={{ style: { color: 'black' } }}
      />
      <TextField
        label="Title"
        variant="filled"
        value={basicTabs.label}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          onChangeHandler(event.target.value, 'label');
        }}
        InputLabelProps={{ style: { color: 'black' } }}
        InputProps={{ style: { color: 'black' } }}
      />
      <TextField
        label="Email"
        variant="filled"
        value={basicTabs.email}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          onChangeHandler(event.target.value, 'email');
        }}
        InputLabelProps={{ style: { color: 'black' } }}
        InputProps={{ style: { color: 'black' } }}
      />
      <TextField
        label="Website URL"
        variant="filled"
        value={basicTabs.url}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          onChangeHandler(event.target.value, 'url');
        }}
        InputLabelProps={{ style: { color: 'black' } }}
        InputProps={{ style: { color: 'black' } }}
      />
      <TextField
        label="Phone"
        variant="filled"
        value={basicTabs.phone}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          onChangeHandler(event.target.value, 'phone');
        }}
        InputLabelProps={{ style: { color: 'black' } }}
        InputProps={{ style: { color: 'black' } }}
      />
      <TextField
        label="Location"
        variant="filled"
        value={basicTabs.location.city}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const location = basicTabs.location;
          location.city = event.target.value;
          onChangeHandler(location, 'location');
        }}
        InputLabelProps={{ style: { color: 'black' } }}
        InputProps={{ style: { color: 'black' } }}
      />
      <TextField
        label="Relevant Experience"
        variant="filled"
        value={basicTabs.relExp}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          onChangeHandler(event.target.value, 'relExp');
        }}
        InputLabelProps={{ style: { color: 'black' } }}
        InputProps={{ style: { color: 'black' } }}
      />
      <TextField
        label="Total Experience"
        variant="filled"
        value={basicTabs.totalExp}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          onChangeHandler(event.target.value, 'totalExp');
        }}
        InputLabelProps={{ style: { color: 'black' } }}
        InputProps={{ style: { color: 'black' } }}
      />
    </Fragment>
  );
};

export default Contacts;
