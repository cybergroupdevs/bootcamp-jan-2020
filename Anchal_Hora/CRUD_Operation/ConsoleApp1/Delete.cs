using System;
using System.Collections.Generic;
using System.Text;
using System.Data.SqlClient;

namespace Dotnetsession
{
    class Delete
    {
        static public void deleteFunc()
        {
            SqlConnection con = DoConneection.funcConnection();
            StringBuilder sb = new StringBuilder();
            sb.Append("DELETE FROM [dbo].[MARKS] WHERE ROLL_NO=1");
            String sql = sb.ToString();
            using (SqlCommand command = new SqlCommand(sql, con))
            {
                using (SqlDataReader reader = command.ExecuteReader())
                {
                    con.Open();
                    while (reader.Read())
                    {
                        Console.WriteLine("{0} {1} {2}", reader.GetInt32(0), reader.GetString(1), reader.GetInt32(2));
                    }
                    Console.ReadLine();
                }
            }
            con.Close();
        }
    }
}
