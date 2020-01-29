using System;
using System.Collections.Generic;
using System.Text;
using System.Data.SqlClient;

namespace demoproject
{

    public class Delete
    {
        public static void deletedata()
        {
            try
            {
                SqlConnectionStringBuilder builder = new SqlConnectionStringBuilder();
                builder.ConnectionString = "Data Source=localhost;Initial Catalog=abha;Integrated Security=True;";

                using (SqlConnection connection = new SqlConnection(builder.ConnectionString))
                {
                    Console.WriteLine("\nQuery data delete example:");
                    Console.WriteLine("=========================================\n");
                    connection.Open();

                    Console.WriteLine(" for delete");
                    StringBuilder delete = new StringBuilder();
                    delete.Append("DELETE from [dbo].[practicedb] where PID=3");
                    String sql = delete.ToString();
                    using (SqlCommand command = new SqlCommand(sql, connection))
                    {
                        using (SqlDataReader reader = command.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                Console.WriteLine("{0} {1} {2}", reader.GetInt32(0), reader.GetString(1));
                            }
                        }
                    }
                }
            }

            catch (SqlException e)
            {
                Console.WriteLine(e.ToString());
            }
            Console.WriteLine("\nDone. Press enter.");
            Console.ReadLine();
        }
    }
}

 