import React, { useEffect, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useDispatch, useSelector } from "react-redux";
import {
  actCreateProjectApi,
  actFetchArrProjectCategoryApi,
} from "../_modules/actions";

export default function CreateProject(props) {
  const arrProjectCategory = useSelector(
    (state) => state.reducer.arrProjectCategory
  );
  const dispatch = useDispatch();
  const [state, setState] = useState({
    projectName: "",
    description: "",
    categoryId: 0,
  });
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  const handleOnCreateProject = (event) => {
    event.preventDefault();
    dispatch(actCreateProjectApi(state));
  };

  useEffect(() => {
    dispatch(actFetchArrProjectCategoryApi());
  }, []);
  return (
    <div className="container m-5">
      <h3>Create Project</h3>
      <form className="container" onSubmit={handleOnCreateProject}>
        <div className="form-group">
          <label htmlFor="projectName">Project name</label>
          <input
            type="text"
            className="form-control"
            id="projectName"
            name="projectName"
            onChange={handleOnChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <Editor
            name="description"
            init={{
              height: 500,
              menubar: false,
              plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount",
              ],
              toolbar:
                "undo redo | formatselect | " +
                "bold italic backcolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
            }}
            onChange={handleOnChange}
          />
        </div>

        <div className="form-group">
          <select
            className="form-control mt-3"
            name="categoryId"
            onChange={handleOnChange}
          >
            {arrProjectCategory?.map((namePro, index) => {
              return (
                <option key={index} value={namePro.id}>
                  {namePro.projectCategoryName}
                </option>
              );
            })}
          </select>
        </div>
        <div className="text-right">
          <button type="submit" className="btn btn-primary">
            Create project
          </button>
        </div>
      </form>
    </div>
  );
}
