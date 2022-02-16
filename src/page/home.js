import React from "react";


class Home extends React.Component {
    render() {
        return (
            <body>
                <div className="App">
                    <table class="calendar">
                        <select class="month-select" name="months">
                            <option value="January 2022">January 2022</option>
                            <option value="February 2022">February 2022</option>
                            <option value="March 2022">March 2022</option>
                            <option value="April 2022">April 2022</option>
                            <option value="May 2022">May 2022</option>
                            <option value="June 2022">June 2022</option>
                            <option value="July 2022">July 2022</option>
                            <option value="August 2022">August 2022</option>
                            <option value="September 2022">September 2022</option>
                            <option value="October 2022">October 2022</option>
                            <option value="November 2022">November 2022</option>
                            <option value="December 2022">December 2022</option>
                        </select>
                        <tr class="weekdays">
                            <th scope="col">Monday</th>
                            <th scope="col">Tuesday</th>
                            <th scope="col">Wednesday</th>
                            <th scope="col">Thursday</th>
                            <th scope="col">Friday</th>
                            <th scope="col">Saturday</th>
                            <th scope="col">Sunday</th>
                        </tr>

                        <tr>
                            <td class="day date">1</td>
                            <td class="day date">2</td>
                            <td class="day date">3</td>
                            <td class="day date">4</td>
                            <td class="day date">5</td>
                            <td class="day date">6</td>
                            <td class="day date">7</td>
                        </tr>
                        <tr>
                            <td class="day date">8</td>
                            <td class="day date">9</td>
                            <td class="day date">10</td>
                            <td class="day date">11</td>
                            <td class="day date">12</td>
                            <td class="day date">13</td>
                            <td class="day date">14</td>
                        </tr>
                        <tr>
                            <td class="day date">15</td>
                            <td class="day date">16</td>
                            <td class="day date">17</td>
                            <td class="day date">18</td>
                            <td class="day date">19</td>
                            <td class="day date">20</td>
                            <td class="day date">21</td>
                        </tr>
                        <tr>
                            <td class="day date">22</td>
                            <td class="day date">23</td>
                            <td class="day date">24</td>
                            <td class="day date">25</td>
                            <td class="day date">26</td>
                            <td class="day date">27</td>
                            <td class="day date">28</td>
                        </tr>
                        <tr>
                            <td class="day date">29</td>
                            <td class="day date">30</td>
                            <td class="day date">31</td>
                        </tr>
                    </table>
                </div>
            </body>
        )
    }
}

export default Home;