export default function IbexLabel({ textToDisplay }) {
  console.log(textToDisplay);
  return (
    <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-pink-600 bg-pink-200 uppercase last:mr-0 mr-1">
      {textToDisplay}
    </span>
  );
}
