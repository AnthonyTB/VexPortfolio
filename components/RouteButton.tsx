import Link from "next/link";

interface IProps {
  Label: string;
  Route: string;
  LocalLink: boolean;
  isPrimary: boolean;
}

const RouteButton: React.FC<IProps> = (props) => {
  if (props.LocalLink) {
    return <Link href={props.Route}>{props.Label}</Link>;
  } else {
    return (
      <a href={props.Route} target="blank_">
        {props.Label}
      </a>
    );
  }
};

export default RouteButton;
