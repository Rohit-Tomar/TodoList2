import Card from "../UI/Card";
import "./AddNewExpenseButton.css";

const AddNewExpenseButton = props => {
  const clickHandler = () => {
    props.setAddNewExpense(1);
  };

  return (
    <Card className="addExpenseButtonContainer">
      <button className="btn" onClick={clickHandler}>
        Add New Expense
      </button>
    </Card>
  );
};

export default AddNewExpenseButton;
