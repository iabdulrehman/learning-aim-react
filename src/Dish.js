import React from 'react';

function TodaysDish(props)
{
    return(
        <div>
            <table>
         <tr>
            <td>
              <p className="heading"><h3>Today's Servings</h3></p>
            </td>
          </tr>
          <tr>
            <td>
              <button type="button" value={props.dish1}>{props.dish1}</button>
            </td>
          </tr>

          <tr>
            <td>
            <button type="button" value={props.dish2}>{props.dish2}</button>
            </td>
          </tr>

          <tr>
            <td>
            <button type="button" value={props.dish3}>{props.dish3}</button>
            </td>
          </tr>

          <tr>
            <td>
            <button type="button" value={props.dish4}>{props.dish4}</button>
            </td>
          </tr>

        </table>
        </div>
    );
}

export default TodaysDish;