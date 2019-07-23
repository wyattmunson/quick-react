import React from "react";

export default class AddTrip extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Add New Trip</h1>
        <form>
          {/* TRIP NAME */}
          <div class="form-group">
            <label for="tripNameInput">Trip Name</label>
            <input type="text" class="form-control" id="tripNameInput" placeholder="Atlantis, December 2019" />
          </div>

          {/* TRIP CITIES */}
          <div class="form-group">
            <label for="tripCitiesInput">Cities</label>
            <input type="text" class="form-control" id="tripCitiesInput" placeholder="Bangkok, Chang Mai, Koh Tao" />
          </div>

          {/* START DATE */}
          <div class="form-group">
            <label for="startDateInput">Start Date</label>
            <input type="date" class="form-control" id="startDateInput" placeholder="Bangkok, Chang Mai, Koh Tao" />
          </div>

          {/* END DATE */}
          <div class="form-group">
            <label for="endDateInput">End Date</label>
            <input type="date" class="form-control" id="endDateInput" placeholder="Bangkok, Chang Mai, Koh Tao" />
          </div>

          {/* SUBMIT BUTTON */}
          <button type="submit" class="btn btn-primary">
            Create Trip
          </button>
        </form>
      </div>
    );
  }
}
