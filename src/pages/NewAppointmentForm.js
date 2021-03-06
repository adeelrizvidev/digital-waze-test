import React from "react";
import FormDatePicker from "../../src/Components/shared/controls/FormDatePicker";
import FormSelect from "../../src/Components/shared/controls/FormSelect";
import FormTextBox from "../../src/Components/shared/controls/FormTextBox";

const NewAppointmentForm = () => {
  return (
    <div className="newAppoinment">
      <h2>New Program Appoinment</h2>
      <form>
        <div>
          <FormTextBox label="Paitent" placeholder="John Smith" />
          <div>
            <FormDatePicker label={"Date"} />
          </div>
          <div>
            <FormSelect label={"Department"} />
          </div>
          <div>
            <FormSelect label={"Doctor Available"} />
          </div>
          <div>
            <FormTextBox label={"Phone"} placeholder={"0344-XXXXXXXX"} />
          </div>
          <div>
            <FormTextBox label={"Email"} placeholder={"abc@excample.com"} />
          </div>
          <div>
            <FormTextBox label={"Note"} isMultiLines={true} />
          </div>
        </div>
        <div>
          <div>
            <FormSelect label={"Lorem ipsum"} />
          </div>
          <div>
            <FormSelect label={"Gender"} />
          </div>
          <div>
            <FormSelect label={"Doctor"} />
          </div>
          <div>
            <FormTextBox label={"Shedule"} placeholder={"Shedule"} />
          </div>
          <div>
            <FormTextBox label={"Type"} />
          </div>

          <div>
            <FormTextBox label={"Address"} placeholder={"Address"} />
          </div>
          <div>
            <FormTextBox label={"Paitent Note"} isMultiLines={true} />
          </div>
          <div className="formButton">
            <div className="cancel">Cancel</div>
            <input type="submit" value="Complete" className="submit" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewAppointmentForm;
