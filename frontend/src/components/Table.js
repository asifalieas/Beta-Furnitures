import React from 'react'
import './Table.css'

const Table = ({ data }) => {
  return (
    <>
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>

        {data.map((student, index) => (
          <tr data-index={index}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.email}</td>
          </tr>
        ))}
      </table>
    </>
  )
}

export default Table
