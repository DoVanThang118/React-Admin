import React from "react";

const Staffs = () => {

  return (
    <section>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Handle</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>@mdo</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <section>
                <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                  <div className="btn-group me-2" role="group" aria-label="First group">
                    <button type="button" className="btn btn-info btn-sm" data-bs-toggle="modal" data-bs-target="#Detail">Detail</button>
                  </div>
                  <div className="btn-group me-2" role="group" aria-label="Second group">
                    <button type="button" className="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#Edit">Edit</button>
                  </div>
                  <div className="btn-group" role="group" aria-label="Third group">
                    <button type="button" className="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#Delete">Delete</button>
                  </div>
                </div>
              </section>
              {/* Modal */}
              <div className="modal fade" id="Detail">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">Detail President</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <p>Name: </p>
                      <p>Email: </p>
                      <p>Address: </p>
                      <p>Telephone: </p>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal fade" id="Edit">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">Edit President</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <p>Name: </p>
                      <p>Email: </p>
                      <p>Address: </p>
                      <p>Telephone: </p>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-warning">Save</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal fade" id="Delete">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">Delete President</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <b>You are sure ?</b>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-danger">Delete</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Modal */}
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
export default Staffs;