using System;
using System.Data.SqlClient;
using System.Text;

namespace demoproject
{
    public class Update
    {
        public static void updatedata()
        {
            try
            {
                SqlConnectionStringBuilder builder = new SqlConnectionStringBuilder();
                builder.ConnectionString = "Data Source=localhost;Initial Catalog=abha;Integrated Security=True;";

                using (SqlConnection connection = new SqlConnection(builder.ConnectionString))
                {
                    Console.WriteLine("\nQuery data update example:");
                    Console.WriteLine("=========================================\n");
                    connection.Open();
                  

                    Console.WriteLine("for update");
                    StringBuilder Update = new StringBuilder();
                    Update.Append("UPDATE [dbo].[practicedb] SET pname='ojdfjh' where PID=2");
                    String sql = Update.ToString();
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

