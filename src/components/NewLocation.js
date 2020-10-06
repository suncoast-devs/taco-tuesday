import React from 'react'

export function NewLocation() {
  return (
    <>
      <div class="modal">
        <div class="modal-content">
          <button class="close-button">&times;</button>
          <h2>Add a Restaurant</h2>
          <form action="#">
            <p className="form-input">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" />
            </p>
            <p className="form-input">
              <label htmlFor="description">Description</label>
              <textarea type="text" name="description"></textarea>
              <span className="note">
                Enter a brief description of the restaurant.
              </span>
            </p>
            <p className="form-input">
              <label htmlFor="name">Address</label>
              <textarea type="text" name="address"></textarea>
            </p>
            <p className="form-input">
              <label htmlFor="name">Telephone</label>
              <input type="tel" name="phone" />
            </p>
            <p className="form-input">
              <label htmlFor="picture">Picture</label>
              <input type="file" name="picture" />
            </p>
            <p>
              <input type="submit" value="Submit" />
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
