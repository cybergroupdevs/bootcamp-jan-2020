using System;
using System.Data.SqlClient;
using System.Text;

namespace demoproject
{
    public class Insert
    {
        public static void insertdata()
        {
            try
            {
                SqlConnectionStringBuilder builder = new SqlConnectionStringBuilder();
                builder.ConnectionString = "Data Source=localhost;Initial Catalog=abha;Integrated Security=True;";

                using (SqlConnection connection = new SqlConnection(builder.ConnectionString))
                {
                    Console.WriteLine("\nQuery data insert example:");
                    Console.WriteLine("=========================================\n");
                    connection.Open();
                   

                    Console.WriteLine(" for insert");
                    StringBuilder insert = new StringBuilder();
                    int  PID= Convert.ToInt32(Console.ReadLine());
                    string pname = Console.ReadLine();
                    insert.Append("INSERT into [dbo].[practicedb](PID, pname) values(+ PID + pname.ToString())");
                    String sql = insert.ToString();
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