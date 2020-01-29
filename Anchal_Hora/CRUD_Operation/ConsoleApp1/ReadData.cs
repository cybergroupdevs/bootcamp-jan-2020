using System;
using System.Collections.Generic;
using System.Text;
using System.Data.SqlClient;

namespace Dotnetsession
{
    class ReadData
    {
        static public void readFunc()
        {
            SqlConnection con = DoConneection.funcConnection();
            try
            {
                con.Open();
                StringBuilder sb = new StringBuilder();
                sb.Append("SELECT [ROLL_NO],[SUBJECT],[MARKS] FROM [dbo].[MARKS] ");
                String sql = sb.ToString();
                using (SqlCommand command = new SqlCommand(sql, con))
                {
                    using (SqlDataReader reader = command.ExecuteReader())
                    {

                        while (reader.Read())
                        {
                            Console.WriteLine("{0} {1} {2}", reader.GetInt32(0), reader.GetString(1), reader.GetInt32(2));
                        }
                        Console.ReadLine();
                    }
                }
                con.Close();
            }
            catch (SqlException e)
            {
                Console.WriteLine(e.ToString());
                
            }

        }
    }
}
