import { ButtonType } from "../enums";

interface IProps {
  Label: string;
  isPrimary: boolean;
  onClick: () => void;
  type: ButtonType;
}

const ActionButton: React.FC<IProps> = (props) => {
  return (
    <button type={props.type} onClick={props.onClick}>
      {props.Label}
    </button>
  );
};

export default ActionButton;
