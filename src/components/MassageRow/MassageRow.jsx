import './MassageRow.css'

export const MassageRow = ({massage}) => {
  return (
    <div
      className={
        massage.user.username === 'user'
          ? 'massage_row massage_user_row'
          : 'massage_row'
      }
    >
      <div
        className={
          massage.user.username === 'user'
            ? 'massage_box massage_user'
            : 'massage_box'
        }
      >
        <div>{massage.body}</div>
        <div>From: {massage.user.username}</div>
      </div>
    </div>
  )
}
