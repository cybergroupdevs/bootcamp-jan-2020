using System;
using System.Data.SqlClient;
using System.Text;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            SqlConnectionStringBuilder builder;
 
            try
            {
                builder = new SqlConnectionStringBuilder();
                builder.ConnectionString = "Data Source=localhost;Initial Catalog=dbAssignment;Integrated Security=True;";

                using (SqlConnection connection = new SqlConnection(builder.ConnectionString))
                {
                    if (connection != null)
                    {
                        connection.Open();
                    }

                    Console.WriteLine("Enter:- \n 1 to execute read query \n 2 to execute write query \n 3 to execute update query \n 4 to execute delete query \n");

                    int userInput = Console.Read();
                    string sqlQuery = "SELECT [id],[description] FROM [dbo].[tblOffice]";
                    string sql = "";
                    switch (userInput)
                    {
                        case '1':
                            {
                                sql = Read.readFromDb();
                                SqlCommand command = new SqlCommand(sql, connection);
                                command.ExecuteNonQuery();
                                break;
                            }
                        case '2':
                            {
                                sql = Create.createToDb();
                                SqlCommand command = new SqlCommand(sql, connection);
                                command.ExecuteNonQuery();
                                break;
                            }
                        case '3':
                            {
                                sql = Update.updateData();
                                SqlCommand command = new SqlCommand(sql, connection);
                                command.ExecuteNonQuery();
                                break;
                            }
                        case '4':
                            {
                                sql = Delete.deleteData();
                                SqlCommand command = new SqlCommand(sql, connection);
                                command.ExecuteNonQuery();
                                break;
                            }
                        default:
                            {
                                Console.WriteLine("Invalid Entry");
                                return;
                            }
                    }
                    printDatabase(sqlQuery, connection);
                    connection.Close();
                
                }
            }
            catch(SqlException e)
            {
                Console.WriteLine(e.ToString());
            }
            

            Console.WriteLine("\nDone. Press enter.");
            Console.ReadLine();
        }

        static void printDatabase(string sql, SqlConnection connection)
        {
            if (sql != "")
            {
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
    }
}
