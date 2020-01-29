using System;
using System.Data.SqlClient;
using System.Text;

namespace DotNetSession1
{
    public class class3
    {
        public static void def()
        {
            try
            {
                SqlConnectionStringBuilder builder = new SqlConnectionStringBuilder();
                builder.ConnectionString = "Data Source=CYG317\\SQLEXPRESS;Initial Catalog=practice1;Integrated Security=True;";

                using (SqlConnection connection = new SqlConnection(builder.ConnectionString))
                {
                    Console.WriteLine("\nQuery data example:");
                    Console.WriteLine("=========================================\n");
                    connection.Open();
                    StringBuilder sb = new StringBuilder();

                    Console.WriteLine(" for delete");
                    StringBuilder delete = new StringBuilder();
                    delete.Append("DELETE from [dbo].[vs_task] where id>=3");
                    String sql = delete.ToString();
                    using (SqlCommand command = new SqlCommand(sql, connection))
                    {
                        using (SqlDataReader reader = command.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                Console.WriteLine("{0} {1} {2}", reader.GetInt32(0), reader.GetString(1), reader.GetString(2));
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


