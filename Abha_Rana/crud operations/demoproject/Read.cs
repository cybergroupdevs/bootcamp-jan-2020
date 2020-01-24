using System;
using System.Data.SqlClient;
using System.Text;

namespace demoproject 
{
    public class Read
    {
        public static void readdata()
        {
            try
            {
                SqlConnectionStringBuilder builder = new SqlConnectionStringBuilder();
                builder.ConnectionString = "Data Source=localhost;Initial Catalog=abha;Integrated Security=True;";

                using (SqlConnection connection = new SqlConnection(builder.ConnectionString))
                {
                    Console.WriteLine("\nQuery data rertrieve example:");
                    Console.WriteLine("=========================================\n");
                    connection.Open();
                 

                    Console.WriteLine(" for retrieving");
                    StringBuilder read= new StringBuilder();
                    read.Append("SELECT PID,pname from [dbo].[practicedb] where PID=4");
                    String sql = read.ToString();
                    using (SqlCommand command = new SqlCommand(sql, connection))
                    {
                        using (SqlDataReader reader = command.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                Console.WriteLine("{0} {1}", reader.GetInt32(0), reader.GetString(1));
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
