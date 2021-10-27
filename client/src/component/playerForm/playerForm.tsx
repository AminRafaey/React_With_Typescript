/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { Formik } from "formik";
import { Form, Button } from "react-bootstrap";
import validationSchema from "../../validationSchema/playerForm";
import { PlayerFormInitState } from "../../container/player/Player";

interface PlayerFormProps {
  currentFormState: PlayerFormInitState;
  // eslint-disable-next-line no-unused-vars
  onSubmit: (values: PlayerFormInitState, actions: any) => void;
}

const PlayerForm: React.FC<PlayerFormProps> = ({
  currentFormState,
  onSubmit,
}) => (
  <Formik
    initialValues={currentFormState}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
  >
    {({
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting,
    }) => (
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 mt-3">
          <Form.Label htmlFor="name">Name😊:</Form.Label>
          <Form.Control
            type="text"
            id="name"
            name="name"
            placeholder="Enter player Name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {!touched || !touched.name ? <span /> : <span>{errors.name}</span>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="age">Age🎅:</Form.Label>
          <Form.Control
            type="number"
            id="age"
            name="age"
            placeholder="Enter player Age"
            value={values.age}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {!touched || !touched.age ? <span /> : <span>{errors.age}</span>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="imageUrl">Image Url:</Form.Label>
          <Form.Control
            type="text"
            id="imageUrl"
            name="imageUrl"
            placeholder="Enter player Image Url"
            value={values.imageUrl}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {!touched || !touched.imageUrl ? (
            <span />
          ) : (
            <span>{errors.imageUrl}</span>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="description">Description:</Form.Label>
          <Form.Control
            type="text"
            id="description"
            name="description"
            placeholder="Enter Description"
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {!touched || !touched.description ? (
            <span />
          ) : (
            <span>{errors.description}</span>
          )}
        </Form.Group>

        <div className="d-grid">
          <Button
            className="full-width"
            type="submit"
            disabled={isSubmitting}
            variant="primary"
          >
            {isSubmitting ? "Loading…" : "Submit"}
          </Button>
        </div>
      </Form>
    )}
  </Formik>
);

export default PlayerForm;
